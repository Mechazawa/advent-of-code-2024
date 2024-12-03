#include <stdio.h>
#include "input.h"

int main() {
    int*l=L,v,o=0,s,d;
    while(C){if(!l[1]){C--;l+=2;o+=v;v=1;s=(*l-l[1]);s=(s>0)-(s<0);}d=s*(*l-*++l);if(d<1||d>3)v=0;}
    printf("%i",o);
}
