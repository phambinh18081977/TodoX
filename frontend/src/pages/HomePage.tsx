import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#f0fdfa] relative">
      {/* Mint Fresh Breeze Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(45deg, 
          rgba(240,253,250,1) 0%, 
          rgba(204,251,241,0.7) 30%, 
          rgba(153,246,228,0.5) 60%, 
          rgba(94,234,212,0.4) 100%
        ),
        radial-gradient(circle at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(167,243,208,0.5) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(209,250,229,0.6) 0%, transparent 45%)
      `,
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          {/* Header */}
          <Header></Header>

          {/* AddTask */}
          <AddTask></AddTask>

          {/* Stats and Filters */}
          <StatsAndFilters></StatsAndFilters>

          {/* TaskList */}
          <TaskList></TaskList>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination></TaskListPagination>
            <DateTimeFilter></DateTimeFilter>
          </div>

          {/* Footer */}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
