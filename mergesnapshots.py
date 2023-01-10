from os import sep
import pandas as pd
import glob
import json

path = './'

all_files = glob.glob(path + '*.csv')

li = []

for filename in all_files:
    df = pd.read_csv(filename, index_col=None, header=None, sep='\n')
    li.append(df)

# df['Count'] = df.groupby(0)[0].transform('count')
df = pd.concat(li, axis=0, ignore_index=True).drop_duplicates()



df.to_csv('merged_snapshots.csv', index=False, sep=',')
# df.to_json('merged_snapshots.json', orient='records')
