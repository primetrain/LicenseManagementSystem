CREATE TABLE IF NOT EXISTS `MODULE`(
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `MODULE` VARCHAR(100) NOT NULL,
  PRODUCT_ID INT NOT NULL,
  FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCT(ID)
);