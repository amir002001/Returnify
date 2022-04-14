import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AppHome: undefined;
  DriverHome: undefined;
  ReturnList: undefined;
  ReturnItem: {
    id: string;
  };
  ItemDetail: {
    id: string;
    imagePath: string;
  };
  OrderDetails:
   {
    retailer: string,
    total: string,
    purchaseDate: string,
    items: any;
  };
  Dispute: { id: string };
  ClientHome: undefined;
  Module: {
    moduleId: string;
  };
  Assessment: {
    assessmentId: string;
  };
  AssessmentFeedback: {
    assessmentId: string;
  };
  AssessmentResult: {
    assessmentId: string;
  };
  FilterOrders: undefined;
};

export type AppHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "AppHome"
>;
export type DriverHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "DriverHome"
>;
export type ReturnListProps = NativeStackScreenProps<
  RootStackParamList,
  "ReturnList"
>;
export type ReturnItemProps = NativeStackScreenProps<
  RootStackParamList,
  "ReturnItem"
>;
export type ItemDetailProps = NativeStackScreenProps<
  RootStackParamList,
  "ItemDetail"
>;
export type DisputeProps = NativeStackScreenProps<
  RootStackParamList,
  "Dispute"
>;
export type ClientHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "ClientHome"
>;

export type ModuleProps = NativeStackScreenProps<RootStackParamList, "Module">;

export type AssessmentProps = NativeStackScreenProps<
  RootStackParamList,
  "Assessment"
>;

export type AssessmentFeedbackProps = NativeStackScreenProps<
  RootStackParamList,
  "AssessmentFeedback"
>;

export type AssessmentResultProps = NativeStackScreenProps<
  RootStackParamList,
  "AssessmentResult"
>;

export type OrderDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "OrderDetails"
>;
export type FilterOrderProps = NativeStackScreenProps<
  RootStackParamList,
  "FilterOrders"
>;
