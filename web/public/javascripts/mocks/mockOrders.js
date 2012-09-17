define(function() {

	var mockOrders = [
		{
		    id: 1,
		    code: "80787",
		    poNumber: "9088",
		    status: "Open",
		    customer: {
			    id: 88,
			    name: "ACME",
			    description: "For all your construction needs",
			    locations: [
		            {
					    id: 14,
					    type: "Billing",
					    line1: "123 Fake St",
					    line2: "Suite 96",
					    line3: "",
					    line4: "",
					    line5: "",
					    city: "Fake",
					    state: "ST",
					    country: "USA",
					    postalcode: "90288"
		            },
		            {
					    id: 17,
					    type: "Shipping",
					    line1: "88 Main St",
					    line2: "",
					    line3: "",
					    line4: "",
					    line5: "",
					    city: "Fake",
					    state: "ST",
					    country: "USA",
					    postalcode: "90288"
		            }
	            ],
			    contacts: [
		            {
					    id: 24,
					    name: "Mary Jones",
					    title: "Purchasing",
					    addresses: [
				            {
							    id: 14,
							    type: "Billing",
							    line1: "123 Fake St",
							    line2: "Suite 96",
							    line3: "",
							    line4: "",
							    line5: "",
							    city: "Fake",
							    state: "ST",
							    country: "USA",
							    postalcode: "90288"
				            }
		                ],      
					    communications: [
			                {
							    id: 61,
							    type: "Phone",
							    value: "123-456-7890"
			                },
			                {
							    id: 63,
							    type: "Fax",
							    value: "123-456-7891"
			                },
			                {
							    id: 62,
							    type: "Email",
							    value: "mjones@acmeconcrete.com"
			                }
		                ]
					},
		            {
					    id: 28,
					    name: "Donnie Baker",
					    title: "Facilities Manager",
					    addresses: [],      
					    communications: [
			                {
							    id: 680,
							    type: "Mobile",
							    value: "123-456-7889"
			                },
			                {
							    id: 681,
							    type: "Email",
							    value: "dbaker@acmeconcrete.com"
			                }
		                ]
					}                
	            ],
			    account: {
				    id: 5624,
				    number: "98278784",
				    paymentterms: "Credit",
				    creditcode: "Credit",
				    creditlimit: 50000.0
	            },
			    status: "Active"
	        },
		    plannerContact: {
			    id: 24,
			    name: "Mary Jones",
			    title: "Purchasing",
			    addresses: [
		            {
					    id: 14,
					    type: "Billing",
					    line1: "123 Fake St",
					    line2: "Suite 96",
					    line3: "",
					    line4: "",
					    line5: "",
					    city: "Fake",
					    state: "ST",
					    country: "USA",
					    postalcode: "90288"
		            }
	            ],      
			    communications: [
	                {
					    id: 61,
					    type: "Phone",
					    value: "123-456-7890"
	                },
	                {
					    id: 63,
					    type: "Fax",
					    value: "123-456-7891"
	                },
	                {
					    id: 62,
					    type: "Email",
					    value: "mjones@acmeconcrete.com"
	                }
	            ]
			},
		    billToCustomer: null,   // Customer
		    billToAddress: null,    // Address
		    payFromCustomer: null,  // Customer
		    payFromAddress: null,   // Address
		    deliveryAddress: {
			    id: 853,
			    type: "Delivery",
			    line1: "8521 Maple Ave",
			    line2: "",
			    line3: "",
			    line4: "",
			    line5: "",
			    city: "Fake",
			    state: "ST",
			    country: "USA",
			    postalcode: "98523"
	        },
		    deliveryContact: {
			    id: 125,
			    name: "Frankie Johnson",
			    title: "Foreman",
			    addresses: [],      
			    communications: [
	                {
					    id: 680,
					    type: "Mobile",
					    value: "123-456-8536"
	                }
	            ]
			},
		    deliveryInstructions: "Meet the foreman for more details",
		    requestedDate: new Date("2012-09-14T14:35:00-04:00"),
		    deliveryDate: new Date("2012-09-17T09:00:00-04:00"),
		    items: [
				{
				    id: 657,
				    code: "3000",
				    description: "3000 PSI",
				    quantity: 100.0,
				    unitPrice: 3.90,
				    tax: 26.33,
				    total: 416.33,
				    specialInstructions: "Add retarder if necessary"
				},
				{
				    id: 658,
				    code: "GLOVES",
				    description: "Pair of Gloves",
				    quantity: 5.0,
				    unitPrice: 8.50,
				    tax: 2.87,
				    total: 45.37,
				    specialInstructions: null
				},        
				{
				    id: 659,
				    code: "HAULING CHARGE",
				    description: "Minimum hauling charge",
				    quantity: 1.0,
				    unitPrice: 35.00,
				    tax: 2.36,
				    total: 37.36,
				    specialInstructions: null
				}        
	        ],
		    subTotal: 467.50,
		    tax: 31.56,
		    grandTotal: 499.06
		}

	];
	return mockOrders;
});   