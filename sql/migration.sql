CREATE TABLE transaction (
  uid SERIAL PRIMARY KEY,
  merchnt VARCHAR(255),
  payment_type VARCHAR(255),
  amount INTEGER,
  date_created DATE
);
