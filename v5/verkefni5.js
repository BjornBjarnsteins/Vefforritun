var g_finished = 2;
var g_total = 3;

/**
 * DOMContentLoaded eventinn er keyrður þegar DOM er tilbúið og hægt að byrja að vinna með það:
 * https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
 * við erum bara að styðja nýlega vafra, ef svo væri ekki, yrði þetta töluvert flóknara
 */
document.addEventListener('DOMContentLoaded',function()
{
	var form = document.getElementById('form');
	form.addEventListener('submit', add, false);

  var todos = document.getElementById('todos');
  var listItems = todos.getElementsByTagName('li');
  var rmButtons = [];
  for (var i=0; i<listItems.length; i++) {
    rmButtons[i] = listItems[i].getElementsByTagName('button')[0];
    rmButtons[i].addEventListener('click', deleteItem, false);
/*
    var checkbox = listItems[i].getElementsByTagName('input')[0]
    checkbox.addEventListener('onchange', toggle, false);*/
  }

  var labels = document.getElementsByTagName('label');
  for (var i=0; i<labels.length; i++) {
    var checkbox = labels[i].getElementsByTagName('input')[0];
    checkbox.addEventListener('change', toggle, false);
  }

	/**
	 * TODO:
	 * útfæra virkni sem bindur toggle og delete við input og
	 * button í HTML
	 */
});

/**
 * Bætir við nýju atriði á todo lista.
 * Bindur virkni til að merkja og eyða atriði.
 */
function add(e)
{
  var form = document.getElementById('form');
  var inputs = form.getElementsByTagName('input');
  var todos = document.getElementById('todos');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'text') {
      continue;
    }

    if (inputs[i].value.length > 0) {
      var itemName = document.createTextNode(inputs[i].value);
      var newItem = document.createElement('li');
      var label = document.createElement('label');
      var checkbox = document.createElement('input');
      var removeBtn = document.createElement('button');
      removeBtn.appendChild(document.createTextNode('eyða'));
      removeBtn.addEventListener('click', deleteItem, false);
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', toggle, false);
      label.appendChild(checkbox);
      label.appendChild(itemName);
      newItem.appendChild(label);
      newItem.appendChild(removeBtn);
      todos.appendChild(newItem);

      inputs[i].value = "";
      g_total++;
      renderStatus();
    }
  }

  e.preventDefault();
}

/**
 * Merkir atriði klárað/óklárað.
 * e er input element
 */
function toggle(e)
{
  if (e.target.checked) {
    e.target.parentElement.parentElement.class = "finished";
    g_finished++;
  } else {
    e.target.parentElement.parentElement.class = "";
    g_finished--;
  }
  renderStatus();

  e.preventDefault();
}

/**
 * Eyðir atriði.
 * e er button.
 */
function deleteItem(e)
{
  var target = e.target.parentElement;
  var mainList = target.parentElement;
  mainList.removeChild(target);
  g_total--;
  renderStatus();
}

/**
 * Uppfærir stöðu á atriðum,
 * hve mörg atriði eru og hve mörg eru eftir.
 */
function renderStatus()
{
  var remaining = document.getElementById('remaining');
  var total = document.getElementById('total');
  remaining.innerHTML = g_total - g_finished;
  total.innerHTML = g_total;
}
