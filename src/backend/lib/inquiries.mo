import Types "../types/inquiries";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type Inquiry = Types.Inquiry;

  public func submit(
    inquiries : List.List<Inquiry>,
    nextId : { var value : Nat },
    name : Text,
    phone : Text,
    serviceNeeded : Text,
    createdAt : Int,
  ) : () {
    Runtime.trap("not implemented");
  };

  public func getAll(inquiries : List.List<Inquiry>) : [Inquiry] {
    Runtime.trap("not implemented");
  };
};
