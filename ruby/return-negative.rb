def makeNegative(num)
  num > 0 ? "-#{num}".to_i : num.to_i
  # -num.abs
end 

makeNegative(1); # return -1
# makeNegative(-5); # return -5
# makeNegative(0); # return 0
makeNegative(42);
