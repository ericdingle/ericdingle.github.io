import argparse
import datetime
import json
import os

parser = argparse.ArgumentParser()
parser.add_argument('directory')

args = parser.parse_args()

output = []

for file_path in os.listdir(args.directory):
  if file_path == 'listing.json':
    continue

  assert file_path[-9:] == '.markdown'
  path = '%s/%s' % (args.directory, file_path[:-9])

  fh = open('%s/%s' % (args.directory, file_path))

  line = fh.readline().rstrip('\n')
  assert line[:2] == '# '
  title = line[2:]

  data = {'path': path, 'title': title}

  date_str = fh.readline().rstrip('\n')
  if date_str:
    date = datetime.datetime.strptime(date_str, '%B %d, %Y')
    date_num = int(date.strftime('%Y%m%d'))
    data.update({'date': date_str, 'timestamp': date_num})

  output.append(data)

fh = open('%s/listing.json' % args.directory, 'w')
json.dump(output, fh, indent=2, sort_keys=True)
