# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
zoo_one = Zoo.create(name: 'Alabama Gulf Coast Zoo', state: 'Alabama', facility: 'Regular')
zoo_two = Zoo.create(name: 'Audubon Bird Sanctuary', state: 'Alabama', facility: 'Bird Sanctuary')
zoo_three = Zoo.create(name: 'Alameda Park Zoo', state: 'New Mexico', facility: 'Park')
zoo_four = Zoo.create(name: 'Victory Rance', state: 'New Mexico', facility: 'Horse Zoo')
zoo_five = Zoo.create(name: 'The Whale Museum', state: 'Washington', facility: 'Whales')
