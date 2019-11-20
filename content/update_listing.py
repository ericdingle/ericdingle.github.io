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

for file_path in sorted(os.listdir(args.directory)):
  if file_path == 'listing.json':
    continue

  assert file_path.endswith('.md')
  data = {'path': '%s/%s' % (args.directory, file_path[:-3])}

  fh = open('%s/%s' % (args.directory, file_path))

  line = fh.readline().strip()
  assert line.startswith('## ')
  data['title'] = line[3:]

  line = fh.readline().strip()
  if line:
    date = None
    for format in ['%B %d, %Y', '%B, %Y']:
      try:
        date = datetime.datetime.strptime(line, format)
        break
      except ValueError:
        pass

    if date:
      data.update({'date': line, 'timestamp': int(date.strftime('%Y%m%d'))})
    else:
      data.update({'snippet': line})

  output.append(data)

fh = open('%s/listing.json' % args.directory, 'w')
json.dump(output, fh, indent=2, sort_keys=True)
