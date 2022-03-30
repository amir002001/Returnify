import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AppHome: undefined;
  DriverHome: undefined;
  ReturnList: undefined;
  ReturnItem: {
    name: string;
    orderNo: string;
    status: JSX.Element;
  };
  ItemDetail: {
    clothingName: string;
    clothingImage: JSX.Element;
  };
  OrderDetails: {
    clothingName: string;
    clothingImage: JSX.Element;
  };
  Dispute: { orderNumber: string };
  ClientHome: undefined;
  ModuleHome: undefined;
  Module: undefined;
  Assessment: undefined;
  AssessmentFeedback: undefined
  AssessmentResult: undefined
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

export type ModuleHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "ModuleHome"
>;

export type ModuleProps = NativeStackScreenProps<
  RootStackParamList,
  "Module"
>;

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
