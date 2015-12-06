# Here are shared variables/methods.
counter = "00"
def style(x,y)
  style="background-position: #{x}px #{y}px;"
end
# End of shared.

def cards_generator
  w = -242
  h = -372
  col = 6
  row = 2

  (0..row).each do |j|
    (0..col).each do |i|
      x = w * i
      y = h * j
      puts "#card#{counter.succ!} {#{style(x,y)}}"
    end
  end
end

def counters_generator
  s = -118
  col = 6
  row = 3

  (0..row).each do |j|
    (0..col).each do |i|
      x = s * i
      y = s * j
      puts "#counter#{counter.succ!} {#{style(x,y)}}"
    end
  end
end
