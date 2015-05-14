require 'faker'

companies = Array.new(30) { Faker::Company.name }.uniq
products = Array.new(1000) { Faker::Commerce.product_name }.uniq
departments = Array.new(10) { Faker::Commerce.department }.uniq

products = Array.new(1000) { Faker::Commerce.product_name }.uniq

while products.count < 750 do
  products.concat(Array.new(1000) { Faker::Commerce.product_name }).uniq
end

data_set_size = 100_000;
output = 'var productData = ['
data_set_size.times do |i|
  output << "{company: \"#{companies.shuffle[0]}\", product: \"#{products.shuffle[0]}\","\
    " department: \"#{departments.shuffle[0]}\", price: #{Faker::Commerce.price}}"
  output << ",\n" unless i == data_set_size - 1
end
output << '];'

File.open("./data_set.js", 'w') { |f| f.write(output) }