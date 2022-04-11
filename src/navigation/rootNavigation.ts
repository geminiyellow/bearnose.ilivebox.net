import { NavigationAction, NavigationContainerRef, StackActions } from "@react-navigation/native";
import { createRef, RefObject } from "react";

export const $navigation: RefObject<NavigationContainerRef<any>> = createRef()

export function navigate(name: string, params?: object): void {
  $navigation.current?.navigate(name, params);
}

export function dispatch(action: NavigationAction): void {
  $navigation.current?.dispatch(action);
}

export function replace(name: string, params?: object): void {
  $navigation.current?.dispatch(StackActions.replace(name, params));
}

export function push(name: string, params?: object): void {
  $navigation.current?.dispatch(StackActions.push(name, params));
}

export function goBack(): void {
  $navigation.current?.goBack();
}

export const navigation = {
  $navigation,
  dispatch,
  replace,
  push,
  goBack
}
