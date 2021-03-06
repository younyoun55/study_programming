#!/bin/sh
#============================================================================================================
## スクリプト名: config_collect.sh
## 仕様概要:    /tmp/collection.csvに記載されたconfigの収集
#              /tmp/collection.csvに記載されたコマンドの標準出力結果の収集
#              /tmp/collection.csvにはファイル名,fileまたはコマンド文,commandと記載
## 利用方法:     ./config_collect.sh
## 引数:         なし
## 作成日付:     2016/12/02
# 更新日付:
##============================================================================================================
PRE_IFS=$IFSIFS=$'\n'
counter=0
DIRNAME=`/bin/date '+%Y%m%d-%H%M%S'`
workdir=/tmp/"$DIRNAME"`mkdir $workdir`
csvfile=/tmp/collection.csv
for line in `cat ${csvfile} | grep -v ^#`
do  counter=`expr $counter + 1`
 first=`echo "${line}" | cut -d ',' -f 1`
 second=`echo ${line} | cut -d ',' -f 2`
 if [ "$second" = "file" ]   
 then
  `cp -rp "$first" "$workdir"/`   
 elif [ "$second" = "command" ]   
 then
  echo "Command Result: $first">>$workdir/result.log
  IFS=$PRE_IFS      $first >>$workdir/result.log
 else      echo "対象$counter行目に指定誤り$second。"
 fi
 doneIFS=$PRE_IFS

