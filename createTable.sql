CREATE TABLE personalized_orders(
  customer_first_name VARCHAR(50);
  customer_last_name VARCHAR(50);
  customer_email VARCHAR(100);
  customer_phone_num VARCHAR(10);
  customer_address VARCHAR(100);
  personalized_image VARCHAR(300);
  quantity INTEGER(200);
  date TIMESTAMP DEFAULT now()
)

CREATE TABLE products_orders(
  customer_first_name VARCHAR(50);
  customer_last_name VARCHAR(50);
  customer_email VARCHAR(100);
  customer_phone_num VARCHAR(10);
  customer_address VARCHAR(100);
  quantity INTEGER(200);
  date TIMESTAMP DEFAULT now()
)