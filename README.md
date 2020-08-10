## Project Details(FrontEnd)
## Project Name: MERCH
## Developer Name : Sudhir

## Users/Role : 
•	Admin : Login details => (Email : admin@gmail.com and  Password: admin123)
•	Normal user(you can try by signup by yourself)

## Concept Summary :
•	Project is created to sell products online where admin can create product category and new products and can assign categories to products. While users can check the products listed by admin using different filters such as new arrival, most seller etc.

## Functionalities :
### `Register`  
•	Login
•	Sign up
•	Sign out
•	Private user who only logged on.

### `Product`
•	New Product(only admin can create)
•	Show image.
•	Category will be automatically load in drop down from category table during from create.
•	List ,Update and delete Products using filters.

### `Categories`
•	New Category
•	List ,Update and delete Category
•	Assign category to product as ref relationship in tables.

### `Role Management and Two Dashboards` 
•	User can sign up and check products with user dashboard
•	Admin can Manage Product Categories and Products Listing with admin dashboard.

### `Product Manipulation`
•	List product
•	Search Product
•	Filter Sort Product by arrival, sold by , price range.

### `Cart`
•	Add  , remove , update and delte Products from cart.
•	Calulcaute total price with all Product in cart.

### `Validation`
•	Error handling on backend and front end on all fields in whole website.
•	Validation for all parameters in helpers.

### `Payment`
•	Get Token from Brain tree api.
•	If Token is real with user id , the show dropin form braintree api to enter card details.

## Assignment of work:
•	All functionality created by me(Sudhir) as its an individual  project for me.

## Developer Details
Name : Sudhir
Id: N01324321
Email: deshwalsudhir07@gmail.com


## Deployment

Server Website Deploment is done at https://merchsid.herokuapp.com/
Front End Website Deploment is done at https://booklibs.herokuapp.com/

## List of Main pages of Website with URLS :
### `1.Login`
Sign in:  https://booklibs.herokuapp.com/signin
### `2.Sign up`
Sign up: https://booklibs.herokuapp.com/signup 
### `3.Home`
Home : https://booklibs.herokuapp.com/
### `4.Shop`
Shop:  https://booklibs.herokuapp.com/shop 
### `5.Admin Dashboard`
Admin Dashboard : https://booklibs.herokuapp.com/admin/dashboard (only admin)
### `6.New Category`
New Category: https://booklibs.herokuapp.com/create/category (Only admin)
### `7.New Product`
New Product : https://booklibs.herokuapp.com/create/product (Only admin)
### `8.Update Product`
Update Products:  https://booklibs.herokuapp.com/admin/product/update/:productId (Only admin)
### `9.Manage Product`
Manage Products : https://booklibs.herokuapp.com/admin/products (Only admin) 
### `10.User Dashboard`
User Dashboard: https://booklibs.herokuapp.com/user/dashboard (only signed) 
### `11.View Cart`
Cart: https://booklibs.herokuapp.com/cart 
### `12.View Single Product`
View Single Product : https://booklibs.herokuapp.com/product/:productId 
### `13.Payment Drop in`
Payment : https://booklibs.herokuapp.com/cart (only signed and products in cart )