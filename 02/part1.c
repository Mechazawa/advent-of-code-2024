#if false
# Run this using `bash part1.c input.txt`
gcc -D L="$(echo \{0,$(while read l; do echo ${l// /,},0,;done<$1)0}\;)" $0 && ./a.out;exit
#endif
#include <stdio.h>

int LL[]=L;
int main() {
    int *l=LL,v,o=0,s,d;
    while(*l|l[1]){if(!l[1]){l+=2;o+=v;v=1;s=(*l-l[1]);s=(s>0)-(s<0);}d=s*(*l-*++l);if(d<1||d>3)v=0;}
    printf("%i",o);
}