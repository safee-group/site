'use strict';

// 1. Tab Navigation Logic
window.openTab = (tabId) => {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  
  const targetContent = document.getElementById(tabId);
  if (targetContent) targetContent.classList.add('active');
  
  const activeBtn = document.querySelector(`[onclick="openTab('${tabId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
};

// 2. Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      // Toggle CSS classes to slide down menu and animate hamburger icon
      menuToggle.classList.toggle('is-active');
      navLinks.classList.toggle('active-menu');
    });
  }
});