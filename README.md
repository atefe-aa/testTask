## Installation

1. to install back-end dependencies run ```composer install```
2. to install front-end dependencies run ```npm install```
3. run the migrations  ```php artisan migrate```
4. To seed the database run ```php artisan db:seed```
5. To start the app run ```php artisan serve```
6. To start the front-end run ```npm run dev```

## First Task : Digikala Product View

visit http://localhos:8000/

The PDF generation process happens on the front-end because the styling is more flexible
and there's a package which is compatible with Farsi characters.
but the images can not be loaded from the urls.They need to be base64 to be loaded properly on the PDF.

## Second Task : Topics and Tickets

visit http://localhos:8000/topic
