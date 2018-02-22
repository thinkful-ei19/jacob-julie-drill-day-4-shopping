'use strict'

function checkOff () {
  $('.shopping-item-toggle').on("click", function(){
    $(event.currentTarget).closest('li').find('.shopping-item')
    .toggleClass('shopping-item__checked');
  });
}

$(checkOff);


function deleteItem () {
  $('.shopping-item-delete').on("click", function() {
    $(event.currentTarget).closest('li').remove();
  });
}

$(deleteItem);


function addItem() {
  $('#js-shopping-list-form button').on("submit", function() {
    event.preventDefault();
    $('').append('.shopping-list')
  });
}