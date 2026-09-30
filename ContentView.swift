import SwiftUI

struct ContentView: View {
    @EnvironmentObject private var store: WorkoutStore
    @State private var selectedDate = Date()
    @State private var selectedGroup: MuscleGroup = .chest

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 18) {
                    CalendarView(selectedDate: $selectedDate)

                    Picker("Группа мышц", selection: $selectedGroup) {
                        ForEach(MuscleGroup.allCases) { group in
                            Text(group.rawValue).tag(group)
                        }
                    }
                    .pickerStyle(.menu)
                    .frame(maxWidth: .infinity, alignment: .leading)

                    ExerciseEditor(
                        date: selectedDate,
                        group: selectedGroup
                    )
                }
                .padding()
            }
            .navigationTitle("Тренировки")
        }
    }
}

struct CalendarView: View {
    @EnvironmentObject private var store: WorkoutStore
    @Binding var selectedDate: Date
    @State private var monthOffset = 0

    private let calendar = Calendar.current

    var monthDate: Date {
        calendar.date(byAdding: .month, value: monthOffset, to: Date()) ?? Date()
    }

    var body: some View {
        VStack(spacing: 12) {
            HStack {
                Button("‹") { monthOffset -= 1 }
                Spacer()
                Text(monthTitle(monthDate))
                    .font(.headline)
                Spacer()
                Button("›") { monthOffset += 1 }
            }

            let days = monthDays(monthDate)
            LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 7), spacing: 10) {
                ForEach(["Пн","Вт","Ср","Чт","Пт","Сб","Вс"], id: \.self) {
                    Text($0).font(.caption).foregroundStyle(.secondary)
                }

                ForEach(days.indices, id: \.self) { index in
                    if let date = days[index] {
                        Button {
                            selectedDate = date
                        } label: {
                            VStack(spacing: 3) {
                                Text("\(calendar.component(.day, from: date))")
                                    .frame(width: 34, height: 34)
                                    .background(
                                        calendar.isDate(date, inSameDayAs: selectedDate)
                                        ? Color.accentColor
                                        : Color.clear
                                    )
                                    .foregroundStyle(
                                        calendar.isDate(date, inSameDayAs: selectedDate)
                                        ? .white : .primary
                                    )
                                    .clipShape(Circle())

                                Circle()
                                    .fill(store.hasWorkout(on: date) ? Color.accentColor : Color.clear)
                                    .frame(width: 5, height: 5)
                            }
                        }
                    } else {
                        Color.clear.frame(height: 39)
                    }
                }
            }
        }
        .padding()
        .background(.thinMaterial)
        .clipShape(RoundedRectangle(cornerRadius: 18))
    }

    private func monthTitle(_ date: Date) -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "LLLL yyyy"
        formatter.locale = Locale(identifier: "ru_RU")
        return formatter.string(from: date).capitalized
    }

    private func monthDays(_ date: Date) -> [Date?] {
        guard let range = calendar.range(of: .day, in: .month, for: date),
              let first = calendar.date(from: calendar.dateComponents([.year, .month], from: date))
        else { return [] }

        let weekday = (calendar.component(.weekday, from: first) + 5) % 7
        var result = Array(repeating: Date?.none, count: weekday)

        for day in range {
            if let d = calendar.date(byAdding: .day, value: day - 1, to: first) {
                result.append(d)
            }
        }
        return result
    }
}

struct ExerciseEditor: View {
    @EnvironmentObject private var store: WorkoutStore
    let date: Date
    let group: MuscleGroup

    @State private var exercises: [Exercise] = []
    @State private var showingAdd = false

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text(group.rawValue)
                    .font(.title3.bold())
                Spacer()
                Button {
                    exercises.append(Exercise(name: "Новое упражнение", sets: 3, reps: 10))
                    save()
                } label: {
                    Label("Добавить", systemImage: "plus")
                }
            }

            if exercises.isEmpty {
                Text("Упражнений пока нет")
                    .foregroundStyle(.secondary)
                    .padding(.vertical, 12)
            } else {
                ForEach($exercises) { $exercise in
                    VStack(alignment: .leading, spacing: 8) {
                        TextField("Упражнение", text: $exercise.name)
                        HStack {
                            Stepper("Подходы: \(exercise.sets)", value: $exercise.sets, in: 1...20)
                            Stepper("Повторы: \(exercise.reps)", value: $exercise.reps, in: 1...100)
                        }
                        Divider()
                    }
                }
                .onDelete { offsets in
                    exercises.remove(atOffsets: offsets)
                    save()
                }
            }
        }
        .onAppear { load() }
        .onChange(of: date) { _, _ in load() }
        .onChange(of: group) { _, _ in load() }
    }

    private func load() {
        exercises = store.exercises(for: date, group: group)
    }

    private func save() {
        store.setExercises(exercises, for: date, group: group)
    }
}
