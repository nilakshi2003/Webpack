import { setupContactForm } from './components/contact/contact';
import { loadFooter } from './components/footer/footer';
import { loadHeader } from './components/header/header';

import './style.scss';

const appDiv = document.getElementById('app');

// Function to dynamically load and inject components
function loadComponent(container, component, append = false) {
    fetch(`components/${component}/${component}.html`)
        .then(response => response.text())
        .then(html => {
            if (append) {
                const section = document.createElement('div');
                section.innerHTML = html;
                container.appendChild(section);
            } else {
                container.innerHTML = html;
            }
            updateNavLinks(); // Ensure links don't reload the page
        })
        .catch(err => console.error(`Error loading ${component}:`, err));
}

// Navigation function to update URL & content without reloading
function navigate(route) {
    if (window.location.pathname !== route) {
        history.pushState({}, '', route);
        render();
    }
}

// Render function to update content dynamically
function render() {
    const { pathname } = window.location;
    appDiv.innerHTML = ''; // Clear current content

    if (pathname === '/' || pathname === '/home') {
        loadComponent(appDiv, 'hero', true);
        
        loadComponent(appDiv, 'about', true);
        loadComponent(appDiv, 'skills', true);
        
    } else if (pathname === '/about') {
        loadComponent(appDiv, 'about');
    } else if (pathname === '/contact') {
        // loadComponent(appDiv, 'contact');
        fetch(`components/contact/contact.html`)
        .then(response => response.text())
        .then(html => {
            
                const section = document.createElement('div');
                section.innerHTML = html;
                appDiv.appendChild(section);
                setupContactForm();
            
            updateNavLinks(); // Ensure links don't reload the page
        })
        .catch(err => console.error(`Error loading contact:`, err));
    } else {
        appDiv.innerHTML = `<h1>404 - Page Not Found</h1>`;
    }
}

// Prevent default `<a>` behavior and handle navigation manually
function updateNavLinks() {
    document.querySelectorAll('.header__nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const route = link.getAttribute('href');
            navigate(route);
        });
    });
}

// Handle browser back/forward navigation
window.addEventListener('popstate', render);

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    render();
});
