CREATE TABLE transaction (
  uid SERIAL PRIMARY KEY,
  merchant VARCHAR(255),
  payment_type VARCHAR(255),
  amount NUMERIC,
  date_created DATE
);
