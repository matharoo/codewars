# negating the exprssion and counting alphabets outside a-m.
def printer_error(s)
  puts "#{s.scan(/[^a-m]/).count}/#{s.size}"
end

printer_error("abcdfefefenop")

# Test cases
# s="aaabbbbhaijjjm"
# error_printer(s) => "0/14"

# s="aaaxbbbbyyhwawiwjjjwwm"
# error_printer(s) => "8/22"
