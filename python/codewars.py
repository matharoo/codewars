# for i in range(1,10):
#     print i
#  a while
# i=1
# while i<=10:
#     # print i
#     i+=1

# try catch
# try:
#     if i==11:
#         print('i in if {0}'.format(i))
#     elif i>11:
#         print('i is greater than 11 i.e. {0}'.format(i))
# except AttributeError:
#     print 'please convert to string lol using format'

# lists
# mylist = [1,3,4,2,0,8,10,9,5]
# for i in mylist:
#     print i
# mylist.sort()
# print(mylist)

# tuple
# mytuple = ('rupinder','gucci','babygyal')
# print(mytuple)

# x=list(mytuple);
# x[1]="guccimaane"
# mytuple=tuple(x)
# print mytuple


# dictionary
# mydict = {"gucci":1,"rupinder":3,"tory":45}
# print mydict['tory']

# for key,val in mydict.iteritems():
    # print("{}:{}".format(key,val))

# sets
# myset = {1,2,3,4,5,6,2,3,4,5,2,5,6}
# print myset

# list traversal
# alist = [1,2,3,4,5]
# newlist = [num*num for num in alist]
# print newlist

# print 'generators'
#generators: one at a time in memoery no lists are stored in mem
# def genoneto10():
#     num=0
#     while num<11:
#         yield num
#         num+=1

# for i in genoneto10():
#     print i

def even_or_odd(number):
    if(number%2==0):
        return 'Even'
    else:
        return 'Odd'
    # return 'Odd' if number % 2 else 'Even'

# print even_or_odd(4)

def summation(num):
    if(num==0): 
        return 0
    return num + summation(num-1)

# print summation(2)
# print summation(8)

def no_space(x):
    # str = ''
    # for i in x.split(' '):
    #     if (i!=' '):
    #         str+=i
    # return str
    return x.replace(' ' ,'')

# print no_space('8 j 8   mBliB8g  imjB8B8  jl  B')  

def bool_to_word(boolean):
    if (boolean):
        return "Yes"
    return "No"
    # return "Yes" if bool else "No"    

# print bool_to_word(True)
# print bool_to_word(False)    
import math
def is_square(n):    
    if n<0 :
        return False
    elif math.sqrt(n).is_integer():
        return True
    return False
    #return n >= 0 and int(math.sqrt(n)) ** 2 == n

# print is_square(3)

def find_it(seq):
    # hash = {}
    # for i in seq:
    #     if i in hash:
    #         hash[i]+=1
    #     else:
    #         hash[i]=1
    # # print hash
    # for key,value in hash.items():
    #     if value%2==1: return key
    for x in seq:
        # print('{} , {}'.format(x,seq.count(x)))
        if seq.count(x)%2==1:
            return x

# print find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])

# string functions python
def StringFunctions(song):
    print (song.count('WUB'))
    print (song.find('WUB'))
    print (song.rfind('WUB'))
    print (song.swapcase())
    print (song.startswith('WUB'))
    print (song.endswith('WUB'))
    print (song.split(' '))
    print (song.capitalize())
    print (song.upper())
    print (song.lower())
    print (song.title())
    print (song.ljust(24)+'test')
    print (song.rjust(24)+'test')
    print ("#AWUBBWUBC#".strip('#'))
    print (song.zfill(23))
    print (len('1\3')) # escape slash not counted so 2
    print (len('1/3')) # count 3
    print ('AWUBBWUBC'[::-song.find('WUB')]) # reverses the string
    print ('AWUBBWUBC'.replace('WUB',' '))

    return -1

# StringFunctions("AWUBBWUBC")

def song_decoder(song):
    # print len(song)
    # print song[8]
    # print song.find('WUB')
    # print song[::-song.rfind('WUB')]
    # print song.replace('WUB',' ').strip(' ')
    # for i in song:
    return ' '.join(filter(lambda x: x!='',song.replace('WUB',' ').split(' ')))
    # print song.replace('WUB',' ').split(' ')

    # return song.replace('WUB',' ').split(' ')

# print song_decoder("AWUBBWUBC")
# print song_decoder('AWUBWUBWUBBWUBWUBWUBC')
# import mathclear
def find_next_square(sq):
    if math.sqrt(sq).is_integer()==False:
        return -1
    else:
        sq+=1
        while(math.sqrt(sq).is_integer()==False):
            sq+=1
        return sq

# print find_next_square(114)

#no math needed
def find_next_square_new(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1


# def foo(param1, *param2): * is for lists arguments
# def bar(param1, **param2): ** is for dictionary arguments
## a ** x double asteriks math operator = a to pow x can check if its squareroot by using is_integer()
# 10//3 quotient without remainder result will be 3 where as 10/3 will be 3.3333

def number(bus_stops):
    # num=0;
    # for i in bus_stops:
        # num+= i[0]-i[1]
    # print bus_stops
    # return num
    return sum([stop[0]-stop[1] for stop in bus_stops])

# print number([[10,0],[3,5],[5,8]])
# print number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
# print number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])

def accum(s):
    return '-'.join(list(map(lambda x: (x[0]*x[1]).title() if x[0]>0 else x[1].title(),enumerate(list(s)))))

# print (accum("ZpglnRxqenU"))
# print (accum("NyffsGeyylB"))

def get_middle(s):
    mid = len(s)//2
    # print("mid is {}".format(mid))
    if len(s)%2 ==0:
        return(s[mid-1]+s[mid])
    else:
        return(s[mid])


# print(get_middle("test"))
# print(get_middle("testing"))
# print (get_middle("A"))
# print (get_middle("A"))
# print (get_middle("of"))

def remove_char(s):
    return s[1:-1]

# print(remove_char('eloquent'))
# print(remove_char('ok'))

def unique_in_order(iterable):
   return [i for ind, i in enumerate(iterable) if(ind>=0 and iterable[ind]!=iterable[ind-1])] if len(iterable)>2 else list(set(iterable))

# print(unique_in_order('AAAABBBCCDAABBB'))
# print(unique_in_order('A'))
# print(unique_in_order('AA'))

def bouncingBall(h, bounce, window):
    print('height {}, bounce {}, window {}'.format(h,bounce,window))
    if bounce==1 or bounce==0 or window>=h:
        return -1
    bounces=0;
    i=0
    while(h>window):
        print(h)
        h=h*bounce
        if i==0 and h>=window:
            bounces+=1
        elif i>0 and h==window:
            bounces+=1
        elif (i!=0) and (h!=window):
            bounces+=2
        i+=1
    return bounces if bounces>0 else -1

    

# print(bouncingBall(3, 0.66, 1.5))
# print(bouncingBall(30, 0.66, 1.5))
# print(bouncingBall(4, 0.25, 1))
# print(bouncingBall(2, 0.5, 1))

def tickets(people):
    moola=0
    change = 0
    while(len(people)>0):
        current = people.pop(0)
        print('current is {}'.format(current))
        if(current==25):
            moola+=25
            # continue
        elif current>25 and moola>=25:
            change = current-25
            print('needed change {}'.format(change))
            if(change>moola):
                return 'NO'
            elif(change<=moola):
                moola+=current
                moola-=change
                print('moola after change {}'.format(moola))
        elif current>25 and moola<=25:
            return 'NO'
    return 'YES'

# print(tickets([25, 25, 50]))
# print(tickets([25, 100]))
# print(tickets([50, 50, 50, 50, 50, 50, 50, 50, 50, 50]))
# print(tickets([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]))
# print(tickets([25, 50, 25, 100]))

def binary_array_to_number(arr):
    return int(''.join([str(i) for i in arr]),2)

# print(binary_array_to_number([0,0,0,1]))
# print(binary_array_to_number([0,0,1,0]))

import heapq

def queue_time(customers, n):
    heap = [0] * n
    print('heap is ',heap)
    for time in customers:
        print('inside loop: ',heap,time)
        heapq.heapreplace(heap, heap[0] + time)
    return max(heap)

# print(queue_time([1,2,3,4,5], 1))
# print(queue_time([10,2,3,3], 2))
# print(queue_time([1,2,3,4,5], 100))
# print(queue_time([2,2,3,3,4,4,5,10,2], 2))

def heaps(numbers):
    hx=[]
    [heapq.heappush(hx,x) for x in numbers]
    print('our heap is: ',hx)
    print('two largest nums : ',heapq.nlargest(2,hx))
    print('two smallest nums : ',heapq.nsmallest(2,hx))
    heapq.heappush(hx,0)
    print('pushing small element to check heap is: ',hx)
    heapq.heappop(hx)
    print('popping element to check heap if smallest was removed and first was replaced by another smalles: ',hx)
    heapq.heappushpop(hx,10)
    print('heappushpop() adding 10 and removing smallest: ',hx)
    heapq.heapify(numbers)
    print('heapify() creating heap in O(n) time better than push : ',numbers)
    def is_even(num):
        print('checking num ',num)
        if num%2 == 0: return 1
        return 0
    print(numbers)
    out = heapq.nlargest(2,numbers,is_even)
    print('nlargest but only if its even: ',out)
    small = heapq.nlargest(2,numbers)
    print('nlargest but only if its even: ',out)
    heapq.heapreplace(numbers,10)
    print('after heapreplace() with eleent 10',numbers)

regularlist = [2,5,9,1,6,8,7,3]
# heaps(regularlist)

def maxheaps(numbers):
    heapq._heapify_max(numbers)
    print(numbers)
    print("popping out max value: ",heapq._heappop_max(numbers))
    print("popping out 2nd max value: ",heapq._heappop_max(numbers))
    print("heap after two removes: ",numbers)

# maxheaps([23,67,23,87,24,90,56,78,99])

def heapsort(numbers):
    print(numbers)
    heapq.heapify(numbers)
    print("after heapify we got heap= ",numbers)
    return [heapq.heappop(numbers) for i in range(len(numbers))]

# print( heapsort([5,3,6,11,77,99,56,23,100,82]) )

def toJadenCase(string):
    print(' '.join([i[0].upper()+i[1:len(i)] for i in string.split()]))


quote = "How can mirrors be real if our eyes aren't real"
# print(toJadenCase(quote))

from functools import reduce
def persistence(n):
    cnt=0;
    while(len(str(n))>1):
        n=str(reduce(lambda x,y:int(x)*int(y),list(str(n))))
        cnt+=1
    return cnt


# print(persistence(39))
# print(persistence(999))

def row_sum_odd_numbers(n):
    return n**3 #lollll

# print(row_sum_odd_numbers(13))

def longest_consec(strarr, k):
    test=[]
    largest=max(strarr,key=len)
    largestright=largest
    largestleft=largest
    largest=max(strarr,key=len)
    print('largest is: ',largest)
    indexes = [i for i, val in enumerate(strarr) if val==largest]
    # print(indexes)
    for x in indexes:
        print(x,len(strarr))
        if(x+(k-1)<len(strarr)): # check right
            print('right is ')
            for i in range(x+1,k+1):
                print(strarr[i])
                largestright+=strarr[i]
        if(x-(k-1)>=0): # check left
            print('left is ',x,x-k)
            for i in range(x-1,x-k,-1):
                largestleft+=strarr[i]
    print('leftconsec: ',largestleft)
    print('rightconsec: ',largestright)
    return largestleft if len(largestleft)>len(largestright) else largestright


# print(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))
# print(longest_consec([], 3))
# print(longest_consec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2))
# print(longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))
# print(longest_consec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2))
import re
def printer_error(s):
    # count=0;
    # print(list(s))
    # for i in list(s):
    #     if i in "nopqrstuvwxyz":
    #         count+=1
    # print(count)
    # return str(count)+'/'+str(len(s))
    test = re.findall('[n-z]',s)
    print(test)
    # print(printer_error(s))
    # he="hello world"
    # l = re.search("lo",he)
    # print(l.group())
    # str1 = 'purple alice@google.com, blah monkey bob@abc.com blah dishwasher' 
    # print (re.sub(r'([w.-]+)@([w.-]+)', r'1@yo-yo-dyne.com', str1))
    text = 'how are u? umberella u! u. U. U@ U# u '
    print(re.sub('[uU]','you',text))


# s="aaaaaqaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxxyz"
# printer_error(s)

def longest(s1, s2):
    l = list(set(list(s1+s2)))
    l.sort()
    return ''.join(l)

# print(longest("aretheyhere", "yestheyarehere"))

def is_triangle(a, b, c):
    if(a+b<c):
        return False
    elif(b+c<a):
        return False
    elif(a+c<b):
        return False
    
    return True

# print(is_triangle(1, 2, 2))

def count_smileys(arr):
    count = 0
    for i in arr:
        current = list(i)
        first = current[0]
        last = current[-1]
        if first in (':',';') and last in (')','D'):
            count+=1
        print(first,'',last)
    # print(list(arr[0])[1])
    print('count is :',count)
    return len(list(findall(r"[:;][-~]?[)D]", " ".join(arr))))

# count_smileys([':D',':~)',';~D',':)'])
# count_smileys([':)',':(',':D',':O',':;'])
# count_smileys([';]', ':[', ';*', ':$', ';-D'])

def array_diff(a, b):
    diff=[]
    print(a,type(tuple(b)))
    for x in a:
        print(x)
        if x not in b:
            diff.append(x)
    return [x for x in a if x not in b]


# print(array_diff([1,2], [1]))
# print(array_diff([1,2,2,2,3],[2]))

def longest_palindrome (s):
    longest = ''
    print(s[::-1])
    for left in range(len(s)):
        for right in range(len(s),left,-1): # bak lloop from end to left
            if s[left:right] == (s[left:right])[::-1]:
                print(s[left:right], (s[left:right])[::-1])
                if(len(longest)<len(s[left:right])):
                    longest=s[left:right]
    return len(longest)


# print(longest_palindrome("abcdefghba"))
# print(longest_palindrome("abcde"))
# print(longest_palindrome('zzbaabcd'))
# print(longest_palindrome("racecar"))
# print(longest_palindrome('baablkj12345432133d'))

def delete_nth(order,max_e):
    print(order,max_e)
    ans = []
    for o in order:
        if ans.count(o) < max_e: ans.append(o)
    print('ans is: ',ans)
    return ans

# print(delete_nth([20,37,20,21], 1))
# print(delete_nth([1,1,3,3,7,2,2,2,2],3))

def two_sum(numbers, target):
    for i,x in enumerate(numbers):
        print(i,x)
        try:
            tofind = numbers.index(target-x,i+1)
            print(tofind)
            if tofind >= 0: return (i,tofind)
        except ValueError:
            continue


    
# print(two_sum([1234,5678,9012], 14690))

def rot13(message):
    message = list(message)
    for i,x in enumerate(message):
        if(re.match('[a-zA-Z]',x)):
            if x.isupper():
                if(ord(x)+13>90):
                    remain = 90-ord(x)
                    circle = 13-remain
                    print('circled upper: ',chr(64+circle))
                    message[i] = chr(64+circle)
                else:
                    print('without circling upper: ',chr(ord(x)+13))
                    message[i] = chr(ord(x)+13)
            else:
                if(ord(x)+13>122):
                    remain = 122-ord(x)
                    circle = 13-remain
                    print('circled: ',chr(96+circle))
                    message[i] = chr(96+circle)
                else:
                    print('without circling: ',chr(ord(x)+13))
                    message[i] = chr(ord(x)+13)
                
    return ''.join(message)

# print(rot13("9YN0SMDCCJ22NU68"))
# print(rot13("test"))
# print(rot13('Avoid success at all costs!'))
# print(rot13('Codewars'))
# print(rot13('10+2 is twelve. 15'))

def sum_pairs(ints, s):
    print(ints,s)
    cache={}
    pairs = []
    for i in range(len(ints)):
        if ints[i] not in cache:
            tofind = s-ints[i]
            print('tofind is :',tofind,' when i is :',i)
            try:
                res = ints.index(tofind,i+1)
                print(res)
                if(i!=res):
                    if(len(pairs)>0):
                        toppair= pairs[0]
                        if(i>toppair[0] and i<toppair[1] and res<toppair[1]):
                            pairs.pop()
                            pairs.append([i,res])
                    else:
                        pairs.append([i,res])
            except ValueError:
                cache[ints[i]] = tofind
                continue
        else:
                print('we searched it already',cache)
                continue
    print('after finding pairs',pairs)
    if(len(pairs)>0):
        print([ints[p] for p in pairs[0]])
    else:
        return None


l1= [1, 4, 8, 7, 3, 15]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l10= [13, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1]
# print(sum_pairs(l1, 8))
# print(sum_pairs(l5, 10))
# print(sum_pairs(l6, 8))
# print(sum_pairs(l10, 12))
# print(sum_pairs([11, 3, 7, 5],10))


def mystery_range(s,n):
    print(s,n)
    print('length of string is ',len(s)//n)


# mystery_range('1568141291110137', 10)

#map
map_obj = map(ord, ['a', 'b', 'c', 'd'])
# print(map_obj)
# print(list(map_obj))

#filter
def is_even(x):
    if x % 2 == 0:
        return True
    else:
        return False

f = filter(is_even, [1, 3, 10, 45, 6, 50])

# lambda is used in place of a function
# print(list(filter(lambda x: x % 2 != 0, [1, 3, 10, 45, 6, 50]))) 
 
# print(list(filter(bool, [10, "", "py"])))


def expanded_form(num):
    num =list(str(num))[::-1]
    newnum=''
    for i in range(len(num)):
        print(num[i])
        if(num[i]!='0'):
            if(i==0):#ones
                newnum+=num[i]+' '
            else:
                newnum+=num[i]+'0'*i+' '
    return ' + '.join(newnum.strip().split(' ')[::-1])

# print(expanded_form(12))
# print(expanded_form(70304))
# print(expanded_form(42))


def find_uniq(arr):
    # cache={}
    # for i,x in enumerate(arr):
    #     if(x not in cache):
    #         try:
    #             findresult = arr.index(x,i+1)
    #             cache[x] = findresult
    #         except ValueError:
    #             cache[x] = 0
    #             continue
    #     else:
    #         continue
    # print(cache)
    # print([i for i in cache.keys() if cache[i]==0][0])
    # return [i for i in cache.keys() if cache[i]==0][0]
    a=set(arr)
    for i in a:
        if(arr.count(i)==1):
            return i
    # return a if arr.count(a) == 1 else b


# print(find_uniq([ 1, 1, 1, 2, 1, 1 ]))

class MathUtils:
    @staticmethod
    def average(a, b):
        return (a + b) / 2

# print(MathUtils.average(2, 1))
import collections
def nth_most_rare(elements, n):
    has = dict((x, elements.count(x)) for x in set(elements))
    print(has)
    nthrepeat = n

    for (key, val) in has.items():
        if val == nthrepeat:
            return key
    heap = [key for key,value in has.items()]
    print(heapq.nsmallest(n,heap)[-1::])




# print(nth_most_rare([5, 4, 3, 2, 1, 5, 4, 3, 2, 5, 4, 3,4,5,6,7,2, 5, 4, 5], 2))

# print(nth_most_rare([5, 4, 3, 2, 1, 5, 5, 4, 5], 2))

# def nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth):
#     # your code
#     return []


# def sort_array(source_array):
#     # Return a sorted array.


# India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

import re
def to_nato(words):
    wordsdict = {
        'i': 'India',
        'f': 'Foxtrot',
        'y': 'Yankee',
        'o': 'Oscar',
        'u': 'Uniform',
        'c': 'Charlie',
        'a': 'Alfa',
        'n': 'November',
        'r': 'Romeo',
        'e': 'Echo',
        'd': 'Delta',
        's': 'Sierra',
        'h': 'Hotel',
        'm': 'Mike',
        'g': 'Golf',
        't': 'Tango',
        'j': 'Juliett',
        'b': 'Bravo',
        'q': 'Quebec',
        'p': 'Papa',
        'l': 'Lima',
        'x': 'Xray',
        'w': 'Whiskey',
        'z': 'Zulu',
        'v': 'Victor',
        'k': 'Kilo'
    }
    return ''.join([wordsdict[i.lower()]+' ' if i.lower() in wordsdict.keys() else i+' ' if re.match(r"[^a-zA-Z\s]",i) else '' for i in list(words)]).strip()

# to_nato('If you can read')
# print(to_nato('IEP?ZQRFT'))

def likes(names):
    if(len(names)>3):
        return names.pop(0)+', '+names.pop(0)+' and '+str(len(names))+' others like this'
    elif(len(names)==3):
        return names.pop(0)+', '+names.pop(0)+' and '+names.pop(0)+' like this'
    elif(len(names)==2):
        return names.pop(0)+' and '+names.pop(0)+' like this'
    elif(len(names)==1):
        return names.pop(0)+' likes this'
    else:
        return "no one likes this"
        


# print(likes([]))
# print(likes(['Peter']))
# print(likes(['Peter','Gucci']))
# print(likes(['Max', 'John', 'Mark']))
# print(likes(['Alex', 'Jacob', 'Mark', 'Max','Muchacho']))

def count(string):
    dic = {}
    return {x:string.count(x) for i,x in enumerate(string) if x not in dic}

# print(count('aba'))
# print(count(''))

def prefill(n,v):
    try:
        return [v] * int(n)
    except:
        raise TypeError(str(n) + ' is invalid')

# print(prefill(2,'abc'))
# print(prefill('1',1))
# print(prefill(0))
# print(prefill('xyz',1))
# print(prefill(3, prefill(2,'2d')))
# print(prefill('',1))

import string
def is_pangram(s):
    alphabet = set(string.ascii_lowercase)
    print(alphabet)
    print(set(s.lower()))
    return set(s.lower())>=alphabet

# print(is_pangram("The quick, brown fox jumps over the lazy dog!"))
# print(is_pangram("Cwm fjord bank glyphs vext quiz"))

def findNb(m):
    print(m)
    vol = 0
    i = 0
    while vol<m:
        vol = vol + i**3
        if(vol==m):
            return i
        i=i+1
    return -1

# print(findNb(1071225))
# print(findNb(135440716410000))
# print(findNb(24723578342962))

def howmuch(m, n):
    data =[]
    for i in range(min(m,n),max(m,n)+1):
        if i%9 == 1 and i%7==2:
            data.append(["M: "+str(i),"B: "+str(i//7),"C: "+str(i//9)])

    return data

# howmuch(1, 100)
# howmuch(1000, 1100)
# howmuch(10000, 9950)
# howmuch(0, 200)
# howmuch(2950, 2950)
print(howmuch(20000, 20100))

