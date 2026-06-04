'use strict';

window.openTab = (tabId) => {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  
  const targetContent = document.getElementById(tabId);
  if (targetContent) targetContent.classList.add('active');
  
  const activeBtn = document.querySelector(`[onclick="openTab('${tabId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
};
