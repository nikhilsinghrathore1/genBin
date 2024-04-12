void setup() {
  pinMode(2,OUTPUT);
  // put your setup code here, to run once:

}

void loop() {
  digitalWrite(2,HIGH);
  delay(500);
  digitalWrite(2,LOW);
  delay(500);
}