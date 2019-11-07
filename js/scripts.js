function Account (name, iDeposit){
  this.name = name,
  this.iDeposit= iDeposit,
  this.totalAmt=0
}

Account.prototype.initialDeposit = function() {
  return this.totalAmt += this.iDeposit;
}

Account.prototype.total = function(deposit, withdraw){
  this.totalAmt += deposit;
  this.totalAmt -= withdraw;
  return this.totalAmt;
}


$(document).ready(function() {
  var person1;
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var userName = $("#name").val();
    var dep1 = parseFloat($("#first-deposit").val());
    person1 = new Account (userName, dep1);

    $(".total1").text(person1.initialDeposit());

  });
  $("form#formTwo").submit(function(event){
    event.preventDefault();

    var moneyIn = parseFloat($("#deposit").val());
    var moneyOut = parseFloat($("#withdrawal").val());


    $(".total1").text(person1.total(moneyIn, moneyOut));

  });
});
