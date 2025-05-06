import psycopg2

try:
    connection = psycopg2.connect(
        dbname="MMI_EXCAVATORS",
        user="sisko91",
        password="sisko1",
        host="localhost",
        port="5432"
    )
    print("Connection successful!")
except Exception as e:
    print(f"Error: {e}")
finally:
    if connection:
        connection.close()