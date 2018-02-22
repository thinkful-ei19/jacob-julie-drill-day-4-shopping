'use strict'

function checkOff () {
  $('.shopping-list').on("click", '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item')
    .toggleClass('shopping-item__checked');
  });
}

$(checkOff);


function deleteItem () {
  $('.shopping-list').on("click", '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
}

$(deleteItem);


function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let input = $("input:text").val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
    </li>`);
  });
}

$(addItem);