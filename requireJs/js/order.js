define(['knockout', 'jquery'], function (ko, $) {

        function tableRow(id,name,category,qty,availbaility,discounts) {
        var self=this;
       self.id = ko.observable(id);
       self.name = ko.observable(name);
       self.category = ko.observable(category);
       self.qty = ko.observable(qty).extend({ digit: true }).extend({ min: 0});
       self.availbaility = ko.observable();
       self.discounts = ko.observableArray();
      
   }

   function viewModelAccount() {  
       var self=this;         
       self.id=ko.observable();
       self.name=ko.observable();
       self.categories= ko.observableArray(["Mobile", "Laptop", "Cricket Bat", "Dress"]);
       self.tableRows = ko.observableArray([]); 
       self.answerTableRows =ko.observableArray([]);       
       self.addNewRow=function(){
           self.tableRows.push(new tableRow("","","","","",[]
           ));         
       }                
       this.addNewRow();
       self.submitTable=function(){                    
           self.answerTableRows(self.tableRows());
       }               
       self.removeRow=function(item){
           self.tableRows.remove(item);
       }              
       
       self.resetTable=function(){           
        self.tableRows.removeAll(); 
        self.answerTableRows.removeAll();               
        this.addNewRow();
        
    }              
    
     }      
     ko.applyBindings(new viewModelAccount());
     
     

 });