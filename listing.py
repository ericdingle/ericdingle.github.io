import argparse
import datetime
import json
import os

parser = argparse.ArgumentParser()
parser.add_argument('directory')

args = parser.parse_args()

output = []

for file_path in os.listdir(args.directory):
  assert file_path[-9:] == '.markdown'
  path = '%s/%s' % (args.directory, file_path[:-9])

  fh = open('%s/%s' % (args.directory, file_path))

  line = fh.readline().rstrip('\n')
  assert line[:2] == '# '
  title = line[2:]

  line = fh.readline().rstrip('\n')
  date = datetime.datetime.strptime(line, '%Y/%m/%d')
  date_str = date.strftime('%B %-d, %Y')

  output.append({'path': path, 'title': title, 'date': date_str})

fh = open('%s.json' % args.directory, 'w')
json.dump(output, fh, indent=2, sort_keys=True)
