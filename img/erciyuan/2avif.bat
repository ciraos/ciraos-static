@echo off

::���·�����Ҫ�������Ƶ����Ƶ��ʽ�������г���һЩ��Ҫ����Ƶ��ʽ
set Ext=*.jpg,*.jpeg,*.png,*.webp

echo ��ʼת��

::���·����������ʽ���������Ϊmp4�������и���
for %%a in (%Ext%) do (
	echo ����ת����%%a
	ffmpeg -loglevel quiet -i "%%a" -f avif "%%~na.avif" -y
	:: ת����ɺ�ɾ�����ļ�
	:: del
)

echo ת�����

pause
