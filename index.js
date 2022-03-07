const bedTip = document.querySelector('.BedTip');
const vaseTip_left = document.querySelector('.VaseTip_left');
const vaseTip_right = document.querySelector('.VaseTip_right');
const vaseTip_table = document.querySelector('.VaseTip_table');

const chairs = document.querySelector('.Products-Chairs');
const beds = document.querySelector('.Products-Beds');

const tabs = document.querySelector('.Tabs');
const tabChairs = document.querySelector('.Tab_chair');
const tabBeds = document.querySelector('.Tab_beds');
const tabSofa = document.querySelector('.Tab_sofa');
const tabLamp = document.querySelector('.Tab_lamp');

const searchInput = document.forms.search.elements[0];

function searchFocus() {
  searchInput.onfocus = function() {
    const searchText = document.querySelector('.Search-Text');
    searchText.style.display = 'none';
  }
  searchInput.onblur = function() {
    const searchText = document.querySelector('.Search-Text');
    searchText.style.display = '';
    searchInput.value = '';
  }
}

searchFocus();


let tooltipElem;

function tips() {
  function handleTipsOver(event) {

    let tooltipHtml = event.target.dataset.tooltip;

    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.innerHTML = tooltipHtml;
    tooltipElem.className = 'Tooltip';
    vaseTip_table.append(tooltipElem);

    let coords = event.target.getBoundingClientRect();
    let left = coords.left + (event.target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 4;
    if (top < 0) top = coords.bottom + 4;

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

  }


  function handleTipsOut(event) {

    if (event.relatedTarget.classList.contains('Tip-Inside')) return;

    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }

    window.addEventListener('scroll', function() {
      tooltipElem.remove();
      tooltipElem = null;
    });
  }

  document.addEventListener('mouseover', handleTipsOver);
  document.addEventListener('mouseout', handleTipsOut);

}

tips();



function openProduct(event, prodName) {
  const products = document.querySelectorAll('.Products');
  for (product of products) {
    product.style.display = "none";
  }

  const tabs = document.querySelectorAll('.Tab');
  for (tab of tabs) {
    tab.classList.remove('active');
  }

  document.getElementById(prodName).style.display = "flex";
  event.currentTarget.classList.add('active');
}

document.getElementById("defaultOpen").click();



