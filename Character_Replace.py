# -*- coding utf-8 -*-
import sys
import re

#arguments for input-file and output-file
args = sys.argv #arguments
if (len(args) <= 2):
        print ("[usage] test.py input-filename output-filename")
        sys.exit()
ifilename=args[1]
ofilename=args[2]

#variables
line=0
line2=0

#make outputfile
csv=open(ofilename,'w')

#import inputfile
for line in open(ifilename,'r'):
        line2 = re.sub(r' +', ' ', line)
        csv.write(line2+'\n')

csv.close

print("finish")

sys.exit()
