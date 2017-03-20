// Complaint view model
function ComplaintsViewModel() {
	var self = this;
	self.complaintsURI = 'http://localhost:5000/complaints/';
	self.complaints = ko.observableArray();

	self.ajax = function(uri, method, data) {
		var request = {
			url: uri,
			type: method,
			contentType: "application/json",
			accepts: "application/json",
			cache: false,
			dataType: 'jsonp',
			data: JSON.stringify(data),
			beforeSend: function (xhr) {
			},
			error: function(jqXHR) {
				console.log("ajax error " + jqXHR.status);
			}
		};
		return $.ajax(request);
	}

	self.beginAdd = function() {
		// alert("Add");
		$("#addComplaintModel").show();
	}

	self.markDone = function(task) {
		task.done(true);
	}

	self.ajax(self.complaintsURI, 'GET').done(function(data) {
		for (var i = 0; i < data.complaints.length; i++) {
			self.complaints.push({
				service: ko.observable(data.complaints[i].service),
				complaint_type: ko.observable(data.complaints[i].complaint_type),
				cust_name: ko.observable(data.complaints[i].cust_name),
				complaint_phone:ko.observable(data.complaints[i].complaint_phone),
				cust_address:ko.observable(data.complaints[i].cust_address),
				date_time:ko.observable(data.complaints[i].date_time),
			});
		}
	});
}

ko.applyBindings(new ComplaintsViewModel(), $('#main')[0]);