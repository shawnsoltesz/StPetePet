using System;

namespace StPetePet.Models
{
    public class Listing
    {
        public int Id {get; set;}
        public bool IsActive {get; set;}
        public string ListingType {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}
        public string Address {get; set;}
        public string Website {get; set;}
        public string PhoneNumber {get; set;}
        public DateTime CreatedDate {get; set;}
        public DateTime UpdatedDate {get; set;}
    }
}