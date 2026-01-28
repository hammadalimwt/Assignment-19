// Access Employee Information
            const company = {
                name: "Tech Solutions",
                employees: {
                    emp1: { name: "Ali", role: "Developer", salary: 80000 },
                    emp2: { name: "Sara", role: "Designer", salary: 70000 }
                }
            };

            // Log Ali’s role
            console.log(company.employees.emp1.name);
            // Log Sara’s salary
            console.log(company.employees.emp2.salary);

            //company is the main object and employees is a nested object and emp1 and emp2 are employee objects
            // Use dot notation to access nested properties

// Update Object Property
            const product = {
                id: 101,
                name: "Headphones",
                price: 3500
            };

            product.price = 4000;
            console.log(product);
            //First we target the pice and then we change it price after that i print the whole object

// Object with Array
            const student = {
                name: "Ahmed",
                age: 20,
                subjects: ["Math", "Physics", "Computer"]
            };

            // Log all subjects
            console.log(student.subjects);
            // Log the second subject
            console.log(student.subjects[1]);

            //First we print the all sujects and then we print the second subject by calling the object name and than use dot to target the array and after than we use the index number.....

// Array of Objects

            const students = [
                { name: "Ayesha", marks: 85 },
                { name: "Bilal", marks: 78 },
                { name: "Hina", marks: 92 }
            ];

            // Log the name of the first student
            console.log(students[0].name);
            //  Log marks of the last student
            console.log(students[2].marks);

// Nested Object

            const user = {
                username: "user123",
                profile: {
                    email: "user@mail.com",
                    address: {
                        city: "Karachi",
                        zip: "75000"
                    }
                }
            };

            // Log user’s email
            console.log(user.profile.email);
            // Log city name
            console.log(user.profile.address.city);

// Modify Nested Object Value
            const order = {
                orderId: 555,
                delivery: {
                    status: "Pending",
                    days: 5
                }
            };

            console.log(order);
            order.delivery.status = 'Delivered'
            console.log(order);


// Object with Array of Objects
            const cart = {
                items: [
                    { name: "Shirt", price: 2000 },
                    { name: "Shoes", price: 5000 }
                ]
            };

            console.log(cart.items[1].price);
            // console.log(cart.items[0]);
            cart.items[0].price = 2200;
            // console.log(cart.items[0]);

            //This output is after updated the values
            console.log(cart.items[0]);
            console.log(cart.items[1]);

// Add New Property
            const car = {
                brand: "Toyota",
                model: "Corolla",
                year: 2022
            };

            // Add a new property price
            car.price = 22250;
            // Log the complete object
            console.log(car);

// Loop Through Object Properties
            const carr = {
                brand: "Toyota",
                model: "Corolla",
                year: 2022
            };
            for (let key in carr) {
                console.log(key + ":", carr[key]);
            }
// Mini Real-World Object

            const menuItem = {
                name: "Burger",
                price: 450,
                available: true
            };
            console.log(menuItem.name);
            console.log(menuItem.price);

            menuItem.available = false;
            console.log(menuItem);
