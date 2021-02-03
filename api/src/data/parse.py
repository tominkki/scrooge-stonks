import csv
import json

def read_data():
  data = []
  with open('stock-data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for obj in reader:
      data.append({
        'date': obj['Date'].strip(),
        'close': float(obj[' Close/Last'].strip(' $')),
        'volume': int(obj[' Volume'].strip()),
        'open': float(obj[' Open'].strip(' $')),
        'high': float(obj[' High'].strip(' $')),
        'low': float(obj[' Low'].strip(' $'))
      })
  return data

def save_to_json(data):
  with open('stock-data.json', 'w') as file:
    json.dump(data, file)

def main():
  data = read_data()
  save_to_json(data)

if __name__ == '__main__':
  main()
