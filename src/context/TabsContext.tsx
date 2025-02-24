import { createContext, useContext } from "react";
import { TabsContextType } from "../types/tabs";

/**
 * `TabsContext`는 탭의 상태(`activeTab`) 및 변경 핸들러(`handleTabChange`)를 관리하는 컨텍스트입니다.
 */
// 탭 컨텍스트 생성
export const TabsContext = createContext<TabsContextType<any> | undefined>(undefined);

/**
 * `useTabs` 훅을 사용하면 현재 `TabsContext`의 값을 가져올 수 있습니다.
 *
 * @template T - 탭 데이터의 타입
 * @throws {Error} - `TabsProvider` 내부에서 호출되지 않으면 에러를 발생시킵니다.
 *
 * @example
 * ```tsx
 * const { active, handleTabChange } = useTabs();
 * ```
 */
// 컨텍스트 훅
export const useTabs = <T extends object = {} | never> (): TabsContextType<T> => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('useTabs must be used within TabsContext');
  return context;
}