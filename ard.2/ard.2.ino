#define led 7
int data;
int led2 = 10;

void setup()
{
  pinMode(led, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  digitalWrite(led, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(LED_BUILTIN, LOW);
}

void loop()
{
  while( Serial.available() )
  {
    data = Serial.read();

    if (data)
    {
      digitalWrite(led, HIGH);
      digitalWrite(led2,LOW);
      digitalWrite(LED_BUILTIN, HIGH);
    }
    if(!data)
    {
      digitalWrite(led,LOW);
      digitalWrite(led2, HIGH);
      digitalWrite(LED_BULTIN,LOW);
    }
    // else if (data == '0')
    // {
    //   digitalWrite(led, LOW);
    //   digitalWrite(led2, HIGH);
    //   digitalWrite(LED_BUILTIN, LOW);
    // }
  }
}
