import Types "types/inquiries";
import InquiriesMixin "mixins/inquiries-api";
import List "mo:core/List";

actor {
  let inquiries = List.empty<Types.Inquiry>();
  var nextIdValue : Nat = 0;
  let nextId = { var value = nextIdValue };

  include InquiriesMixin(inquiries, nextId);
};
