// Complaint Model
var Complaint = function (cust_id,cust_name,cust_address,cust_phone) {
	this.cust_id			=	cust_id;
	this.cust_name			=	cust_name;
	this.cust_address		=	cust_address;
	this.cust_phone			=	cust_phone;
}

// Complaint view model
var ComplaintsViewModel = function(){
	this.cust_id			=	ko.observable();
	this.cust_name			=	ko.observable();
	this.cust_address		=	ko.observable();
	this.cust_phone			=	ko.observable();
	
	this.complaints = ko.observableArray([
	]);

	this.addComplaint = function () {
        if ((this.cust_id() != "") && (this.cust_name() != "") && (this.cust_address() != "") && (this.cust_phone() != ""))
            this.complaints.push(new Complaint(this.cust_id(),this.cust_name(),this.cust_address(),this.cust_phone()));
        this.cust_id(""); // Clear the text box
        this.cust_name("");
        this.cust_address("");
        this.cust_phone("");
        $('#addComplaintModel').hide();
    };
};

ko.applyBindings(new ComplaintsViewModel());