#!/usr/bin/perl

#ping監視スクリプト

#pingコマンド出力フォーマット
#PING localhost (127.0.0.1) 56(84) bytes of data.
#64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.086 ms
#64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.088 ms
#64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.088 ms
#
#--- localhost ping statistics ---
#3 packets transmitted, 3 received, 0% packet loss, time 2000ms
#rtt min/avg/max/mdev = 0.086/0.087/0.088/0.007 ms

#引数取り込み
$ip_address = $ARGV[0];

#pingコマンド実行
open(PING, "/bin/ping -c 3 $ip_address 2>&1|")
        or $mssg = "Couldn't exec ping.";
while(<PING>){
        if (/(\d+)(% packet loss)/){
                $ploss = $1;
        }
        elsif(/(rtt min\/avg\/max\/mdev = )(.+)(\/)(.+)(\/)(.+)(\/)(.+)( ms)/){
                $rtt_min=$2;
                $rtt_avg=$4;
                $rtt_max=$6;
                $rtt_mdev=$8;
        }
}
close(PING);

#ログファイル出力
$file_path = "/var/log/sd/" . $ip_address . "_ping";
        if (/(\d+)(% packet loss)/){
                $ploss = $1;
        }
        elsif(/(rtt min\/avg\/max\/mdev = )(.+)(\/)(.+)(\/)(.+)(\/)(.+)( ms)/){
                $rtt_min=$2;
                $rtt_avg=$4;
                $rtt_max=$6;
                $rtt_mdev=$8;
        }
}
close(PING);

#ログファイル出力
$file_path = "/var/log/sd/" . $ip_address . "_ping";
open(LOGFILE,">>$file_path")
        or $mssg .= "Couldn't open $file_path.";
#現在時刻、監視値出力
($sec,$min,$hour,$mday,$Month,$Year) = localtime(time);
print LOGFILE sprintf ("%04d-%02d-%02d %02d:%02d:%02d,",
        $year + 1900,$Month +1,$mday,$hour,$min,$sec);
print LOGFILE "$rtt_min,$rtt_avg,$rtt_max,$rtt_mdev,$ploss,";

if($ploss > 0){
        $mssg .= "$ploss% packet Loss";
}

print LOGFILE "$mssg\n";
close(LOGFILE);

#障害メッセージを標準出力に出力
if ($mssg){
        print $ip_address . "_ping " . $mssg . "\n";
}

_END_
