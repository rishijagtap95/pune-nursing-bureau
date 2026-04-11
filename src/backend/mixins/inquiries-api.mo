import Types "../types/inquiries";
import InquiriesLib "../lib/inquiries";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (inquiries : List.List<Types.Inquiry>, nextId : { var value : Nat }) {
  public func submitInquiry(name : Text, phone : Text, serviceNeeded : Text) : async () {
    Runtime.trap("not implemented");
  };

  public query func getInquiries() : async [Types.Inquiry] {
    Runtime.trap("not implemented");
  };
};
