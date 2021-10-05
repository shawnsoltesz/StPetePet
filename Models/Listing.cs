using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StPetePet.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }

        [Required(ErrorMessage = "You must select a Listing Type.")]
        public string ListingType { get; set; }

        [Required(ErrorMessage = "You must enter a Name.")]
        public string Name { get; set; }

        public string Description { get; set; }
        public string Address { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Website { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string PhotoURL { get; set; }

        public List<Review> Reviews { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}