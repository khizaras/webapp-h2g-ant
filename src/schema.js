export const categories = [{
    "name": "food",
    "label": "Food",
    "icon": "https://cdn-icons-png.flaticon.com/512/2776/2776827.png",
    "visible": true,
    "attributres": [
        {
            "name": "title",
            "placeholder": "Title",
            "type": "text",
            "maxLength": 100,
            "required": true,
            "visible": true
        },
        {
            "name": "description",
            "placeholder": "Brief Description",
            "type": "textarea",
            "required": true,
            "maxLength": 250,
            "visible": true
        },
        {
            "name": "whatType",
            "placeholder": "Choose Listing Type",
            "type": "select",
            "required": true,
            "visible": true,
            "options": [
                {
                    "label": "Wanted Help Listing",
                    "value": "wantedHelp"
                },
                {
                    "label": "Offered Help Listing",
                    "value": "offeredHelp"
                }
            ]
        },
        {
            "name": "foodType",
            "placeholder": "Food Preference (veg/non-veg)",
            "type": "select",
            "required": true,
            "options": [
                {
                    "label": "Veg",
                    "value": "veg"
                },
                {
                    "label": "Non-Veg",
                    "value": "non-veg"
                }
            ],
            "visible": true

        },
        {
            "name": "quantity",
            "placeholder": "Quantity",
            "type": "number",
            "required": true,
            "visible": true
        },
        {
            "name": "address",
            "placeholder": "Address",
            "type": "text",
            "visible": true
        },
        {
            "name": "country",
            "placeholder": "Choose Country",
            "type": "select",
            "options": [
                {
                    "label": "India",
                    "value": "india"
                },
                {
                    "label": "USA",
                    "value": "usa"
                }
            ],
            "visible": true
        },
        {
            "name": "state",
            "placeholder": "Choose State",
            "type": "select",
            "options": [
                {
                    "label": "Karnataka",
                    "value": "karnataka"
                },
                {
                    "label": "Tamil Nadu",
                    "value": "tamilnadu"
                }
            ],
            "visible": true
        },
        {
            "name": "city",
            "placeholder": "Choose City",
            "type": "select",
            "options": [
                {
                    "label": "Bangalore",
                    "value": "bangalore"
                },
                {
                    "label": "Chennai",
                    "value": "chennai"
                }
            ],
            "visible": true
        },
        {
            "name": "pincode",
            "placeholder": "Pincode / Zipcode",
            "type": "number",
            "visible": true
        },
        {
            "name": "displayContact",
            "placeholder": "Display Contact Details",
            "type": "select",
            "options": [
                {
                    "label": "Yes",
                    "value": "true"
                },
                {
                    "label": "No",
                    "value": "false"
                }
            ],
            "visible": true
        },
        {
            "name": "contactName",
            "placeholder": "Contact Name",
            "type": "text",
            "visible": true
        },
        {
            "name": "contactNumber",
            "placeholder": "Contact Number",
            "type": "number",
            "visible": true
        },
    ],
    images: 3
},
{
    "name": "clothes",
    "label": "Clothes",
    "icon": "https://cdn-icons-png.flaticon.com/512/4178/4178034.png",
    "visible": true,
    "attributres": [
        {
            "name": "title",
            "placeholder": "Title",
            "type": "text",
            "maxLength": 100,
            "required": true,
            "visible": true,
           "help": "Title of the listing"
        },
        {
            "name": "description",
            "placeholder": "Brief Description",
            "type": "textarea",
            "required": true,
            "maxLength": 250,
            "visible": true,
           "help": "Description of the listing"
        },
        {
            "name": "whatType",
            "placeholder": "Choose Listing Type",
            "type": "select",
            "required": true,
            "visible": true,
            "options": [
                {
                    "label": "Wanted Help Listing",
                    "value": "wantedHelp"
                },
                {
                    "label": "Offered Help Listing",
                    "value": "offeredHelp"
                }
            ],
           "help": "Type of listing"
        },
        {
            "name": "clothsPreference",
            "placeholder": "Cloths preferences ",
            "type": "select",
            "required": true,
            "options": [
                {
                    "label": "Male",
                    "value": "male"
                },
                {
                    "label": "Fe-Male",
                    "value": "female"
                },
                {
                    "label": "Kids",
                    "value": "kids"
                },
                {
                    "label": "Unisex",
                    "value": "unisex"
                }
            ],
            "visible": true,
           "help": "choose the type of clothes you want to donate or need (Male, Female, Kids, Unisex)"

        },
        {
            "name": "size",
            "placeholder": "size",
            "type": "select",
            "options":[
                {
                    "label": "Small",
                    "value": "s"                
                },
                {
                    "label": "Medium",
                    "value": "m"
                },
                {
                    "label": "Large",
                    "value": "l"
                },
                {
                    "label": "xl",
                    "value": "xl"
                },
                {
                    "label": "xxl",
                    "value": "xxl"
                },
                {
                    "label": "xxxl",
                    "value": "xxxl"                    
                },
                {
                    "label": "Any",
                    value:"any"
                }
            ],
            "required": true,
            "visible": true,
           "help": "choose the size of clothes you want to donate or need (Small, Medium, Large, XL, XXL, XXXL, Any)"
        },
        {
            "name": "address",
            "placeholder": "Address",
            "type": "text",
            "visible": true,
           "help": "Address of the listing"
        },
        {
            "name": "country",
            "placeholder": "Choose Country",
            "type": "select",
            "options": [
                {
                    "label": "India",
                    "value": "india"
                },
                {
                    "label": "USA",
                    "value": "usa"
                }
            ],
            "visible": true
        },
        {
            "name": "state",
            "placeholder": "Choose State",
            "type": "select",
            "options": [
                {
                    "label": "Karnataka",
                    "value": "karnataka"
                },
                {
                    "label": "Tamil Nadu",
                    "value": "tamilnadu"
                }
            ],
            "visible": true
        },
        {
            "name": "city",
            "placeholder": "Choose City",
            "type": "select",
            "options": [
                {
                    "label": "Bangalore",
                    "value": "bangalore"
                },
                {
                    "label": "Chennai",
                    "value": "chennai"
                }
            ],
            "visible": true
        },
        {
            "name": "pincode",
            "placeholder": "Pincode / Zipcode",
            "type": "number",
            "visible": true
        },
        {
            "name": "displayContact",
            "placeholder": "Display Contact Details",
            "type": "select",
            "options": [
                {
                    "label": "Yes",
                    "value": "true"
                },
                {
                    "label": "No",
                    "value": "false"
                }
            ],
            "visible": true,
           "help": "Display your contact details to the public who wants to request for help or donate"
        },
        {
            "name": "contactName",
            "placeholder": "Contact Name",
            "type": "text",
            "visible": true
        },
        {
            "name": "contactNumber",
            "placeholder": "Contact Number",
            "type": "number",
            "visible": true
        },
    ],
    images: 3
}
]
