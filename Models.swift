import Foundation
import Combine

enum MuscleGroup: String, CaseIterable, Codable, Identifiable {
    case chest = "Грудь"
    case back = "Спина"
    case legs = "Ноги"
    case arms = "Руки"
    case shoulders = "Плечи"
    case abs = "Пресс"

    var id: String { rawValue }
}

struct Exercise: Identifiable, Codable, Equatable {
    var id = UUID()
    var name: String
    var sets: Int
    var reps: Int
}

struct WorkoutDay: Codable {
    var exercises: [MuscleGroup: [Exercise]] = [:]
}

final class WorkoutStore: ObservableObject {
    @Published var workouts: [String: WorkoutDay] = [:]

    private let key = "GymTracker.workouts"

    init() {
        load()
    }

    func workout(for date: Date) -> WorkoutDay {
        workouts[dateKey(date)] ?? WorkoutDay()
    }

    func exercises(for date: Date, group: MuscleGroup) -> [Exercise] {
        workout(for: date).exercises[group] ?? []
    }

    func setExercises(_ exercises: [Exercise], for date: Date, group: MuscleGroup) {
        let key = dateKey(date)
        var day = workouts[key] ?? WorkoutDay()
        day.exercises[group] = exercises
        workouts[key] = day
        save()
        objectWillChange.send()
    }

    func hasWorkout(on date: Date) -> Bool {
        let day = workout(for: date)
        return day.exercises.values.contains { !$0.isEmpty }
    }

    private func dateKey(_ date: Date) -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        formatter.locale = Locale(identifier: "ru_RU")
        return formatter.string(from: date)
    }

    private func save() {
        if let data = try? JSONEncoder().encode(workouts) {
            UserDefaults.standard.set(data, forKey: key)
        }
    }

    private func load() {
        guard
            let data = UserDefaults.standard.data(forKey: key),
            let decoded = try? JSONDecoder().decode([String: WorkoutDay].self, from: data)
        else { return }
        workouts = decoded
    }
}
