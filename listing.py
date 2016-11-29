# Creates a listing file for a given directory.
# 1) Scans the directory looking for .md files.
# 2) Reads first line to retrieve title.
# 3) Reads second line to retrieve date or snippet.

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

  assert file_path[-3:] == '.md'
  path = '%s/%s' % (args.directory, file_path[:-3])
  data = {'path': path}

  fh = open('%s/%s' % (args.directory, file_path))

  line1 = fh.readline().rstrip('\n')
  assert line1[:3] == '## '
  title = line1[3:]
  data['title'] = title

  line2 = fh.readline().rstrip('\n')
  if line2:
    date = ''
    timestamp = 0

    for format in ['%B %d, %Y', '%B, %Y']:
      try:
        date = datetime.datetime.strptime(line2, format)
        break
      except ValueError:
        pass

    if date:
      data.update({'date': line2, 'timestamp': int(date.strftime('%Y%m%d'))})
    else:
      data.update({'snippet': line2})

  output.append(data)

fh = open('%s/listing.json' % args.directory, 'w')
json.dump(output, fh, indent=2, sort_keys=True)
